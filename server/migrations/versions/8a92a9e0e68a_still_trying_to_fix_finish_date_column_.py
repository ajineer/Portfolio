"""still trying to fix finish_date column in Project model

Revision ID: 8a92a9e0e68a
Revises: 33997fc40a54
Create Date: 2023-10-20 13:37:25.342671

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8a92a9e0e68a'
down_revision = '33997fc40a54'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('projects', schema=None) as batch_op:
        batch_op.add_column(sa.Column('finish_date', sa.String(), nullable=False))
        batch_op.drop_column('finishe_date')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('projects', schema=None) as batch_op:
        batch_op.add_column(sa.Column('finishe_date', sa.VARCHAR(), autoincrement=False, nullable=False))
        batch_op.drop_column('finish_date')

    # ### end Alembic commands ###
